// components/LoadingComponent.tsx
import { Spinner } from "@nextui-org/react";

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Spinner size="lg" color="primary" />
    </div>
  );
};

export default LoadingComponent;
