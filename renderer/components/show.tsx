export function Show({ children, when, otherwise = null }: { children: any, when: boolean, otherwise?: any }) {
    return when ? children : otherwise;
}