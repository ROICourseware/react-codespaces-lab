function Book({title , author  }) {

    return (
        <tr>
            <td>
                {title}
            </td>
            <td>{author}</td>
        </tr>
    );
  }
  
  export default Book;