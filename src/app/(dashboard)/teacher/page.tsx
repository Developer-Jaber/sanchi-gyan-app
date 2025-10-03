import ProtectedRoute from "@/components/auth/ProtectedRoute";


export default function TeacherDashboard() {
    return(
        <ProtectedRoute allowedRoles={['teacher']}>
            <h1>Teacher Dashboard</h1>
        </ProtectedRoute>
    )
}