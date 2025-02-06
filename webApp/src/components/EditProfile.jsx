import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { updateUser } from '../firebase/auth/user';

const EditProfile = ({ isOpen, onClose, user }) => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    const handleClose = () => {
        onClose();
    };

    const handleEdit = async () => {
        await updateUser(user.id, name, bio);
        onClose();
    };

    useEffect(() => {
        if (user) {
            setName(user.name || '');
            setBio(user.bio || '');
        }
    }, [user]);

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-gray-400 dark:bg-black rounded-lg shadow-lg p-6 w-full max-w-md">
                {/* Modal Close */}
                <button className="absolute top-10 right-20 text-white text-3xl" onClick={handleClose}>&times;</button>
                
                {/* Modal Title */}
                <h2 className="text-white text-xl font-bold mb-4">Edit Profile</h2>

                {/* User Name */}
                <div className="flex flex-col mt-5 gap-2">
                    <label className='text-white'>Username</label>
                    <input type="text" className="w-full p-2 rounded-md bg-gray-400 dark:bg-black text-white outline-none mb resize-none border shadow-lg" placeholder="My name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                {/* User Bio */}
                <div className="flex flex-col mt-5 gap-2">
                    <label className='text-white'>Bio</label>
                    <input type="text" className="w-full p-2 rounded-md bg-gray-400 dark:bg-black text-white outline-none mb resize-none border shadow-lg" placeholder="My bio" value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>

                {/* Save Button */}
                <button className="bg-gray-600 text-white px-4 py-2 rounded-md w-full mt-5" onClick={handleEdit}>Save Change</button>
            </div>
        </div>
    )
}

EditProfile.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

export default EditProfile