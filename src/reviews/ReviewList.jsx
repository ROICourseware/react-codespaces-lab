function ReviewList({ reviews}) {

    return (<>
        <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(function (item, i) {
                        return <tr key={i}>
                            <td >{item.review}</td>
                        </tr>
                    }
                    )}
                </tbody>
            </table>
        </div>
        </>);
}

export default ReviewList;



                