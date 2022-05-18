import React from "react";

const BadgeActionHeadless =
  (
    Badge: ({ children }: { children: JSX.Element }) => JSX.Element,
    Loader: () => JSX.Element,
    CopyIcon: () => JSX.Element
  ) =>
  (label: string, getActionResult: (id: number) => Promise<string>) =>
  ({ id }: { id: number }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleAction = async (id: number) => {
      setIsLoading(true);
      const actionResult = await getActionResult(id);

      await navigator.clipboard.writeText(actionResult);
      alert("copied to clipboard");
      setIsLoading(false);
    };

    if (isLoading) {
      return <Loader />;
    }

    return (
      <button onClick={() => handleAction(id)}>
        <Badge>
          <>
            {label} <CopyIcon />
          </>
        </Badge>
      </button>
    );
  };

 export default BadgeActionHeadless;