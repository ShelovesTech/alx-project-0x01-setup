import { PostData, PostModalProps} from "@/interface";
import React, {useState} from "react";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit}) => {
    const[post,setPost] = useState<PostData>({
        userId:1,
        title:"",
        body:""
    });
    const handleChange = (e: React.changeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name,Value} = e.target;
        setPost((prePost)) => ({ ...prePost, [name]: value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(post);
        onClose();
    };

    return (
        <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
            <h2 className="text-2*1 font-bold mb-4 text-grey-800"> Add New Post </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="usedId" className="block text-gray-700 font-medium mb-2">User ID</labe>
                    <input type="number" id="userId" name="userId" value={post.userId} onchange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus: ring-blue-500"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="body" className="block text-gray-700 font medium mb-2">Body</label>
                        <textarea id="body" name="body" value={post.body} onChange={handleChange} rows={4} 
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter post content"/>
                        </div>
                        <div className="flex justify-between items-center">
                            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none">
                                cancel</button>
                                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                                    Add Post </button>
                                    </div>
                                    </form>
                                    </div>
                                    </div>


 
    );

};

export default PostModal;