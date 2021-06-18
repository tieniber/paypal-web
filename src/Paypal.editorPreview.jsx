import { Component, createElement } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export class preview extends Component {
    render() {
        return (
            <PayPalScriptProvider options={{ "client-id": "test" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        );
    }
}

export function getPreviewCss() {
    return require("./ui/Paypal.css");
}
