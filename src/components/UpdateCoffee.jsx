import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";



const UpdateCoffee = () => {


    const coffee = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();


        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(updatedCoffee);

        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee UPDATED Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }




    return (
        <div className="bg-red-600 p-24">
            <h2 className="text-3xl font-extrabold">Update Coffee : {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" defaultValue={name} placeholder="coffee name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity"  defaultValue={quantity}  placeholder="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="supplier" defaultValue={supplier}  placeholder="supplier name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="taste" defaultValue={taste}  placeholder="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form- category and detailsrow */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="category" defaultValue={category} placeholder="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder="details" defaultValue={details} name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form- photo url row */}
                <div className="">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" defaultValue={photo} placeholder="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Update Coffee" className="btn btn-block mt-10" />
            </form>
        </div>
    );
};

export default UpdateCoffee;