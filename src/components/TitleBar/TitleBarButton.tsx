
type TitleBarButtonProps = {
    children: React.ReactNode
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const TitleBarButton = ({children, onClick}: TitleBarButtonProps) => {
    return (
        <button data-cy={'title-bar-button'} className="p-2" onClick={onClick}>
            {children}
        </button>
    )
}

export default TitleBarButton