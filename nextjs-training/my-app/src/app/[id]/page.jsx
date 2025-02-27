export default async function WebId({ params }) {
    const { id } = await params
    return <h1>WEB ID: {id}</h1>;
  }