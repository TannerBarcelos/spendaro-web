import type { FieldApi } from "@tanstack/react-form";

function ErrorFields({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <p className="text-red-500 font-medium text-sm">
          {field.state.meta.errors.join(", ")}
        </p>
      ) : null}
    </>
  );
}

export default ErrorFields;
