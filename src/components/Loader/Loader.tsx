type Props = {
  loading: boolean;
};

export default function Loader({ loading }: Props) {
  return <>{loading && <p>Loading data, please wait...</p>}</>;
}
