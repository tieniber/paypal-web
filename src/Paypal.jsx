import { Component, createElement } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

export default class Paypal extends Component {
    render() {
        const { clientID, currency, dataClientToken, intent } = this.props;

        if (
            clientID.status === "available" &&
            currency.status === "available" &&
            dataClientToken.status === "available" &&
            intent.status === "available"
        ) {
            const initialOptions = {
                "client-id": clientID.value,
                currency: currency.value,
                intent: intent.value,
                "data-client-token": dataClientToken.value
            };

            return (
                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons style={{ layout: "vertical" }} />
                </PayPalScriptProvider>
            );
        } else {
            return null;
        }
    }
}
