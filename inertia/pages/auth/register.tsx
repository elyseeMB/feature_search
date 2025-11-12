import { Form } from '@inertiajs/react'
import { MouseEventHandler, useRef } from 'react'
import { Button } from '~/components/ui/button.js'
import { Checkbox } from '~/components/ui/checkbox.js'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '~/components/ui/field.js'
import { Input } from '~/components/ui/input.js'

export default function register() {
  const formRef = useRef<null | { submit: () => void }>(null)

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    if (!formRef.current) {
      return
    }
    formRef.current.submit()
  }

  return (
    <section className="p-4 grid place-items-center">
      <div className="w-full max-w-md">
        <div className="text-4xl pb-4">Registration Account</div>
        <Form ref={formRef} method="POST" action={'/auth/register'}>
          {({ errors }) => {
            console.log(errors)
            return (
              <FieldGroup>
                <FieldSet>
                  <FieldLegend>
                    Connectez-vous à votre compte Accédez à votre espace personnel en entrant vos
                    identifiants.
                  </FieldLegend>
                  <FieldDescription>
                    Entrez vos identifiants pour accéder à votre espace personnel. Vos informations
                    de connexion sont strictement confidentielles.
                  </FieldDescription>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="fullname">FullName</FieldLabel>
                      <Input
                        id="fullname"
                        name="fullname"
                        placeholder="jonhDoe"
                        defaultValue="jonhDoe"
                        required
                      />
                    </Field>
                    {errors['fullname'] && <FieldError>{errors['email']}</FieldError>}
                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        placeholder="jane@gmail.com"
                        defaultValue="jane@gmail.com"
                        required
                      />
                      {errors['email'] && <FieldError>{errors['email']}</FieldError>}
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <Input
                        id="password"
                        name="password"
                        defaultValue="je suis le password"
                        required
                      />
                      {errors['password'] && <FieldError>{errors['password']}</FieldError>}
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </FieldGroup>
            )
          }}
        </Form>
        <Field className="justify-end pt-4" orientation="horizontal">
          <Button onClick={handleSubmit} type="submit">
            Submit
          </Button>
          <Button variant="outline" type="button">
            Cancel
          </Button>
        </Field>
      </div>
    </section>
  )
}
