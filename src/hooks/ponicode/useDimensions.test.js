const useDimensions = require("../useDimensions")
// @ponicode
describe("useDimensions.useWindowDimensions", () => {
    test("0", () => {
        let result = useDimensions.useWindowDimensions()
        expect(result).toMatchSnapshot()
    })
})
