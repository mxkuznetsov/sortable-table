import { useState } from "react"
import PaginationButton from "./PaginationNavigationButton/PaginationButton"
import styled from "styled-components"

type PaginationProps = {
    // hasPreviousPage: boolean,
    // hasNextPage: boolean
}

export const Pagination: React.FC<PaginationProps> = ({ }) => {
    // Set which props to toggle as true
    //     <PaginationNavigation
    //     hasPreviousPage={hasPreviousPage}
    //     hasNextPage={hasNextPage}
    // >
    // This manages the state of the buttons but also gets the state from its parent, the data fetch
    const [hasNextPage, setHasNextPage] = useState<Boolean>(true)
    const [hasPreviousPage, setHasPreviousPage] = useState<Boolean>(true)

    return (<>
        <PaginationWrapper>
            <span>
                Per page: 10
                {/* TO DO: Dynamic page input */}

            </span>
            <PaginationButtonWrapper>
                <PaginationButton
                    onClick={() => {
                        setHasNextPage(true)
                        setHasPreviousPage(false)
                    }}
                    variant="first"
                />
                <PaginationButton
                    onClick={() => {
                        setHasNextPage(true)
                        setHasPreviousPage(hasPreviousPage)
                    }}
                    variant="previous"
                />

                <PaginationButton
                    onClick={() => {
                        setHasPreviousPage(true)
                        setHasNextPage(hasNextPage)
                    }}
                    variant="next"
                />
                <PaginationButton
                    onClick={() => {
                        setHasPreviousPage(true)
                        setHasNextPage(false)
                    }}
                    variant="last"
                />
            </PaginationButtonWrapper>
        </PaginationWrapper>
    </>)
}

const PaginationButtonWrapper = styled.div`
display: flex;
flex-direction: row;
align-self: flex-end;
`

const PaginationWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export default Pagination