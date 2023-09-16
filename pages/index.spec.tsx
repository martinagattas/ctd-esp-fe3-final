import {render, screen} from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index comics={{
                code: 0,
                status: "",
                copyright: "",
                attributionText: "",
                attributionHTML: "",
                data: {
                    offset: 0,
                    limit: 0,
                    total: 0,
                    count: 0,
                    results: []
                },
                etag: ""
            }}/>)
            const title = screen.getByText('Marvel comics')
            expect(title).toBeInTheDocument()
        })
    })
})