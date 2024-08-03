import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/ui/alert"

export function AlertDestructive({ showAlert }) {
  return (
    <Alert className={`${!showAlert ? 'hidden' : 'block'}`} variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  )
}
