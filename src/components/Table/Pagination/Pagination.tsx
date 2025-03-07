import PaginationButton from "./PaginationNavigationButton/PaginationButton"
import styled from "styled-components"

type PaginationProps = {
    currentPage: number;
    itemsPerPage: number;
    onPageChange: (newPage: number) => void;
    onPageSizeChange: (newSize: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage,
    itemsPerPage,
    onPageChange,
    onPageSizeChange
}) => {
    return (<>
        <PaginationWrapper>
            <span>
                <label htmlFor="items-per-page">Per page: </label>
                <select name="items-per-page" id="items-per-page" value={itemsPerPage} onChange={(e => onPageSizeChange(Number(e.target.value)))}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </span>
            {/* List components in a ul for semantic HTML */}
            <PaginationButtonWrapper >
                <li><PaginationButton onClick={() => onPageChange(0)} variant="first" disabled={currentPage === 0} /></li>
                <li><PaginationButton onClick={() => onPageChange(currentPage - 1)} variant="previous" /></li>
                <li><PaginationButton onClick={() => onPageChange(currentPage + 1)} variant="next" /></li>
                <li><PaginationButton onClick={() => onPageChange(100)} variant="last" disabled={true} /></li>
            </PaginationButtonWrapper>
        </PaginationWrapper >
    </>)
}

const PaginationButtonWrapper = styled.div`
    align-self: center;
    display: flex;
    flex-direction: row;
    gap: 4px;
`

const PaginationWrapper = styled.ul`
    background-color: ${({ theme }) => theme.colors.background.accent};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 64px;
    padding: 10px 16px;
    list-style-type: none;
    width: 100%;
    > li {
        display: flex;
    }
`
export default Pagination