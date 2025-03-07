import styled from 'styled-components'
import { ReactComponent as FirstPage } from './../../../../assets/FirstPage.svg'
import { ReactComponent as LastPage } from './../../../../assets/LastPage.svg'
import { ReactComponent as ChevronRight } from './../../../../assets/ChevronRight.svg'
import { ReactComponent as ChevronLeft } from './../../../../assets/ChevronLeft.svg'

type PaginationButtonProps = {
    variant: "first" | "previous" | "next" | "last",
    onClick: () => void,
    disabled?: boolean,
}

const navIconMap: Record<PaginationButtonProps['variant'], React.ReactNode> = {
    first: <FirstPage />,
    last: <LastPage />,
    next: <ChevronRight />,
    previous: <ChevronLeft />,
};

const PaginationButton: React.FC<PaginationButtonProps> = ({ variant, onClick, disabled = false }) => {
    return (
        // Uses aria label since no visible text for label.
        <StyledButton disabled={disabled} aria-label={`${variant} page of search results`} onClick={onClick}>
            {navIconMap[variant]}
        </StyledButton>
    )
}

const StyledButton = styled.button<{
    $disabled?: boolean;
}>`
    background-color: inherit;
    border: none;
    height: 44px;
    padding: 16px;
    color: ${({ $disabled, theme }) => $disabled ? theme.colors.text.disabled : theme.colors.text.secondary};
`

export default PaginationButton