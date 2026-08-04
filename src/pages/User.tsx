import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import type { RootStore } from "../stores/store";
import { fetchUserPost } from "../thunk/userThunk";

const Users = () => {
    const [value, setValue] = useState<number>(1);

    const dispatch = useDispatch();

    const { userPost, loading, error } = useSelector(
        (state: RootStore) => state.userPost
    );

    const handleFetch = () => {
        if (value > 0) {
            dispatch(fetchUserPost(value));
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
                    User Post Finder
                </h1>

                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="number"
                        min={1}
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        placeholder="Enter Post ID..."
                        className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />

                    <button
                        onClick={handleFetch}
                        disabled={loading}
                        className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        {loading ? "Fetching..." : "Fetch Post"}
                    </button>
                </div>

                {error && (
                    <div className="mt-6 rounded-lg border border-red-300 bg-red-50 p-4 text-red-600">
                        {error}
                    </div>
                )}

                {userPost && (
                    <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="text-sm text-slate-500">
                                    User ID
                                </p>
                                <p className="text-lg font-semibold">
                                    {userPost.userId}
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-slate-500">
                                    Post ID
                                </p>
                                <p className="text-lg font-semibold">
                                    {userPost.id}
                                </p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-sm text-slate-500 mb-2">
                                Title
                            </h2>

                            <p className="rounded-lg bg-white p-4 border text-slate-700">
                                {userPost.title}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-sm text-slate-500 mb-2">
                                Body
                            </h2>

                            <p className="rounded-lg bg-white p-4 border leading-7 text-slate-700">
                                {userPost.body}
                            </p>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;