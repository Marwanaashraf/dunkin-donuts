import NotFound from "../../Components/NotFound/NotFound";

export default function NotFoundPage() {
  return (
    <>
      <NotFound
        title="This page doesn’t exist, but the thing you’re looking for might. Check the URL or visit our homepage."
        url="/"
        btnName="GO TO HOME"
      />
    </>
  );
}
