import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";

function LoginForm(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const onSubmit = () => {};
  const onChange = () => {};
  const handlerShowPassword = (): void => {
    setShowPassword(!showPassword);
    setIsLoading(false);
  };
  return (
    <div className="login-form">
      <h2>Inicio de Sesión</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Field>
          <h3>Ingrese su correo electrónico</h3>
          <Input
            type="text"
            name="email"
            placeholder="Correo Electrónico"
            icon="mail outline"
          />
        </Form.Field>
        <Form.Field>
          <h3>Ingrese su contraseña</h3>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            icon={
              showPassword ? (
                <Icon
                  name="eye slash outline"
                  link
                  onClick={handlerShowPassword}
                />
              ) : (
                <Icon name="eye" link onClick={handlerShowPassword} />
              )
            }
          />
        </Form.Field>
        <Button type="submit" loading={isLoading}>
          Iniciar Sesión
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
