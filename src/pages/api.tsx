import Layout from "@theme/Layout";

export default function Api() {
  return (
    <Layout>
      <main style={{height: "100vh"}}>
        <iframe src="https://api.buildwithlayer.com/docs/" style={{width: "100%", height: "100%", backgroundColor: "white"}} />
      </main>
    </Layout>
  );
}
