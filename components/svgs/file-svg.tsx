
export default function FileSvg(props: React.ComponentPropsWithoutRef<"svg">) {
    return (
        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M13 0H2C0.9 0 0 0.9 0 2V22C0 23.1 0.9 24 2 24H16C17.1 24 18 23.1 18 22V5L13 0Z" fill="#F2BB41"/>
            <path d="M13 0V5H18L13 0Z" fill="#E08838"/>
        </svg>
    )
}