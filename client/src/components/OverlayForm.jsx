import React from 'react';
import { useForm } from 'react-hook-form';

const OverlayForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitHandler = async (data) => {
        try {
            const response = await fetch('http://localhost:8000/overlay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Overlay successfully created:', result);
            // Call the onSubmit prop with the new overlay data
            onSubmit(data);
        } catch (error) {
            console.error('Error creating overlay:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
            <div>
                <label htmlFor="height" className="block">Height:</label>
                <input
                    type="number"
                    {...register('height', { required: 'Height is required' })}
                    className={`border ${errors.height ? 'border-red-500' : 'border-gray-300'} p-2`}
                />
                {errors.height && <p className="text-red-500">{errors.height.message}</p>}
            </div>
            <div>
                <label htmlFor="width" className="block">Width:</label>
                <input
                    type="number"
                    {...register('width', { required: 'Width is required' })}
                    className={`border ${errors.width ? 'border-red-500' : 'border-gray-300'} p-2`}
                />
                {errors.width && <p className="text-red-500">{errors.width.message}</p>}
            </div>
            <div>
                <label htmlFor="top" className="block">Top:</label>
                <input
                    type="number"
                    {...register('top', { required: 'Top position is required' })}
                    className={`border ${errors.top ? 'border-red-500' : 'border-gray-300'} p-2`}
                />
                {errors.top && <p className="text-red-500">{errors.top.message}</p>}
            </div>
            <div>
                <label htmlFor="left" className="block">Left:</label>
                <input
                    type="number"
                    {...register('left', { required: 'Left position is required' })}
                    className={`border ${errors.left ? 'border-red-500' : 'border-gray-300'} p-2`}
                />
                {errors.left && <p className="text-red-500">{errors.left.message}</p>}
            </div>
            <div>
                <label htmlFor="bottom" className="block">Bottom:</label>
                <input
                    type="number"
                    {...register('bottom', { required: 'Bottom position is required' })}
                    className={`border ${errors.bottom ? 'border-red-500' : 'border-gray-300'} p-2`}
                />
                {errors.bottom && <p className="text-red-500">{errors.bottom.message}</p>}
            </div>
            <div>
                <label htmlFor="right" className="block">Right:</label>
                <input
                    type="number"
                    {...register('right', { required: 'Right position is required' })}
                    className={`border ${errors.right ? 'border-red-500' : 'border-gray-300'} p-2`}
                />
                {errors.right && <p className="text-red-500">{errors.right.message}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Create Overlay</button>
        </form>
    );
};

export default OverlayForm;
