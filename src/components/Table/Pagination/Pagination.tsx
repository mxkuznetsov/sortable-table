import PaginationButton from "./PaginationNavigationButton/PaginationButton"
import styled from "styled-components"

type PaginationProps = {
    currentPage: number;
    itemsPerPage: number;
    onPageChange: (newPage: number) => void;
    onPageSizeChange: (newSize: number) => void;
}
// Mock doesn't show where the current page status would go
// I'd want to make sure the page status is communicated out properly and I set the aria updates correctly.
// Since I chose to use server-side pagination, I can't actually have us go to the last page since I don't know what it is!
// That is a trade off. 
// Disabled states are inaccurate because we don't know if there's a next page until we try to load it. Kind of an obvious gotcha in hindsight.


export const Pagination: React.FC<PaginationProps> = ({ currentPage,
    itemsPerPage,
    onPageChange,
    onPageSizeChange
}) => {
    return (<>
        <PaginationWrapper>
            <span>
                <label htmlFor="items-per-page">Per page:</label>
                <select name="items-per-page" id="items-per-page" value={itemsPerPage} onChange={(e => onPageSizeChange(Number(e.target.value)))}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
            </span>
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
display: flex;
flex-direction: row;
align-self: flex-end;
gap: 4px;

`

const PaginationWrapper = styled.ul`
display: flex;
flex-direction: row;
justify-content: space-between;
height: 64px;
padding: 10px 16px;
    list-style-type: none;
`
export default Pagination