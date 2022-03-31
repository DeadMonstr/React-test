
export function useAuth() {
    const token = sessionStorage.getItem("token")
    const user = localStorage.getItem("user")
    const role = localStorage.getItem("role")

    return {
        isAuth: !!user,
        user,
        role,
        token
    }
}

