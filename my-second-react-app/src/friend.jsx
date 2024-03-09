export default function Friend({ firend }) {
  return (
    <div className="box">
      <h2>name:{firend.name}</h2>
      <h3>username {firend.username}</h3>
      <h3>email {firend.email}</h3>
      <h3>city {firend.address.city}</h3>
    </div>
  );
}
