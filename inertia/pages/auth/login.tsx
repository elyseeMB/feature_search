import { Button } from '~/components/ui/button.js'
import { Checkbox } from '~/components/ui/checkbox.js'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '~/components/ui/field.js'
import { Input } from '~/components/ui/input.js'


export default function Login() {
  return (
    <section className="p-4">
      <div className="w-full ">
        <Field className="justify-end" orientation="horizontal">
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </Field>
      </div>
      <div className="w-full max-w-md">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Payment Method</FieldLegend>
              <FieldDescription>All transactions are secure and encrypted</FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">Name on Card</FieldLabel>
                  <Input id="checkout-7j9-card-name-43j" placeholder="Evil Rabbit" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">Card Number</FieldLabel>
                  <Input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                  <FieldDescription>Enter your 16-digit card number</FieldDescription>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
          </FieldGroup>
        </form>
      </div>
    </section>
  )
}
