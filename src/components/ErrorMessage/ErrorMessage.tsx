type Props = {
  error: boolean;
};

export default function ErrorMessage({ error }: Props) {
  return (
    <>
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    </>
  );
}
