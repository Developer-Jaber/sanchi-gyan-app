

type DashboardLayoutProps = {
    children: React.ReactNode;
}

const DashboardLayoutProps = ({ children}: DashboardLayoutProps) => {
    return (
        <>
        <div>{children}</div>
        </>
    )
}