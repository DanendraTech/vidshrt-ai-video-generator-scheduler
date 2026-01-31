"use server"

import { currentUser } from "@clerk/nextjs/server"
import { createAdminClient } from "@/lib/supabase/admin"

export async function syncUser() {
  const user = await currentUser()
  
  if (!user) {
    return { error: "Not authenticated" }
  }

  const supabase = createAdminClient()
  
  // Check if user exists
  const { data: existingUser } = await supabase
    .from("users")
    .select("id")
    .eq("id", user.id)
    .single()

  if (existingUser) {
    return { success: true }
  }

  // Insert user
  // Note: Ensure your Supabase 'users' table has 'id' as the primary key. 
  // If you changed it to 'user_id', update this field accordingly.
  const { error } = await supabase.from("users").insert({
    user_id: user.id,
    email: user.emailAddresses[0].emailAddress,
    name: `${user.firstName} ${user.lastName}`.trim(),
  })

  if (error) {
    console.error("Error syncing user:", error)
    return { error: error.message }
  }

  return { success: true }
}
