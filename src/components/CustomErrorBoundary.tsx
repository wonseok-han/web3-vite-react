import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { type ElementType, type PropsWithChildren, Fragment } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type CustomErrorBoundaryProps = {
  ErrorComponent: ElementType;
  isQuerySuspenseUse?: boolean;
};

const CustomErrorBoundary = ({
  ErrorComponent,
  children,
  isQuerySuspenseUse = false,
}: PropsWithChildren<CustomErrorBoundaryProps>) => {
  return (
    <>
      {isQuerySuspenseUse ? (
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <ErrorComponent
                  error={error}
                  onReset={() => {
                    resetErrorBoundary();
                  }}
                />
              )}
              onReset={reset}
            >
              <Fragment>{children}</Fragment>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      ) : (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) => (
            <ErrorComponent
              error={error}
              onReset={() => {
                resetErrorBoundary();
              }}
            />
          )}
        >
          <Fragment>{children}</Fragment>
        </ErrorBoundary>
      )}
    </>
  );
};

export default CustomErrorBoundary;
