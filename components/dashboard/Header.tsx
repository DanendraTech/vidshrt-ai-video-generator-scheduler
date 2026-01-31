import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-end border-b bg-card px-6 dark">
      <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
        <nav className="flex items-center space-x-2">
          <UserButton />
        </nav>
      </div>
    </header>
  );
}
