import { render, screen } from "@testing-library/react";
import FaqsPage from "./index.page";

describe('FaqsPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<FaqsPage faqs={[]}/>)
            const title = screen.getByText('Preguntas frecuentes')
            expect(title).toBeInTheDocument()
        })
    })
})