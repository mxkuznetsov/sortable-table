import { ReactComponent as FirstPage } from './../../../../assets/FirstPage.svg'
import { ReactComponent as LastPage } from './../../../../assets/LastPage.svg'
import { ReactComponent as ChevronRight } from './../../../../assets/ChevronRight.svg'
import { ReactComponent as ChevronLeft } from './../../../../assets/ChevronLeft.svg'
import styled from 'styled-components'

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
        // use aria label since no visible text. May want to revisit copy if people find it noisy
        <StyledButton disabled={disabled} aria-label={`${variant} page of search results`} onClick={onClick}>
            {navIconMap[variant]}
        </StyledButton>
    )
}
// how do I take in props to know if it's disabled
// diabled icon  #BABABC 
// background - color: #DCDCDC

const StyledButton = styled.button<{
    $disabled?: boolean;
}>`
border: none;
padding: 16px;
height: 44px;
color: ${props => props.$disabled ? "#BABABC" : "#6c6c72"};
`

export default PaginationButton