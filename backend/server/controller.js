// Houses all of your handler functions
// Handlers are the callback functions for your endpoints

// Set up global variable to mock a Database:
const TEST_DATA = [
    { id: 0, description: 'Content plan', rate: 50, hours: 4 },
    { id: 1, description: 'Copy writing', rate: 50, hours: 2 },
    { id: 2, description: 'Website design', rate: 50, hours: 5 },
    { id: 3, description: 'Website development', rate: 100, hours: 5 },
];

const handlerFunctions = {

    getInvoices: (req, res) => {
        res.send({
            message: 'Here are all the invoices',
            invoices: TEST_DATA
        })
    }
}

export default handlerFunctions