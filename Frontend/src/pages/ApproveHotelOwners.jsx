import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ApproveHotelOwners() {

    const navigate = useNavigate();

    const [owners, setOwners] = useState([]);

    const loadOwners = async () => {

        try {

            const response = await fetch(
                "http://localhost:8081/api/admin/pending-owners"
            );

            const data = await response.json();

            setOwners(data);

        } catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        loadOwners();

    }, []);

    const approveOwner = async (id) => {

        const response = await fetch(
            `http://localhost:8081/api/admin/approve/${id}`,
            {
                method: "PUT"
            }
        );

        const message = await response.text();

        alert(message);

        loadOwners();

    };

    const blockOwner = async (id) => {

        const response = await fetch(
            `http://localhost:8081/api/admin/block/${id}`,
            {
                method: "PUT"
            }
        );

        const message = await response.text();

        alert(message);

        loadOwners();

    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-4">

                <h2>Pending Hotel Owners</h2>

                <button
                    className="btn btn-secondary"
                    onClick={() => navigate("/admin")}
                >
                    Back
                </button>

            </div>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Approve</th>
                        <th>Block</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        owners.length === 0 ?

                        <tr>

                            <td
                                colSpan="7"
                                className="text-center"
                            >

                                No Pending Owners

                            </td>

                        </tr>

                        :

                        owners.map(owner => (

                            <tr key={owner.userId}>

                                <td>{owner.userId}</td>
                                <td>{owner.fullName}</td>
                                <td>{owner.email}</td>
                                <td>{owner.phone}</td>
                                <td>{owner.status}</td>

                                <td>

                                    <button
                                        className="btn btn-success"
                                        onClick={() =>
                                            approveOwner(owner.userId)
                                        }
                                    >
                                        Approve
                                    </button>

                                </td>

                                <td>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            blockOwner(owner.userId)
                                        }
                                    >
                                        Block
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ApproveHotelOwners;