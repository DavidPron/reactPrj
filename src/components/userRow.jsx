export const userRow = ({userData}) => {
    return (
        <div>
        {userData.map(todo => {
            return (
              <div key={todo.userId}>{todo.title}</div>
            );
          })}
        </div>
    )
}