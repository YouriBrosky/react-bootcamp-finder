import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AddBootcampComponent = () => {
    const validationSchema = yup.object().shape({
        title: yup.string().required().min(2),
        imageUrl: yup.string().required().min(5),
        details: yup.string().required(),
    });

    const onSubmit = (data: any) => console.log(data);
    const { handleSubmit, errors, control } = useForm({
        resolver: yupResolver(validationSchema),
    });

    return (
        <div className="bootcamp-container col-8">
            <div className="add-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        {errors.title && <div className="text-danger error-message">{errors.title.message}</div>}
                        <Controller as={Input} name="title" control={control} defaultValue="" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="imageUrl">Image url</Label>
                        {errors.imageUrl && <div className="text-danger error-message">{errors.imageUrl.message}</div>}
                        <Controller as={Input} name="imageUrl" control={control} defaultValue="" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="details">Details</Label>
                        {errors.details && <div className="text-danger error-message">{errors.details.message}</div>}
                        <Controller
                            defaultValue=""
                            control={control}
                            name="details"
                            render={(props) => (
                                <textarea
                                    className="form-control details-textarea"
                                    onChange={(e) => props.onChange(e.target.value)}
                                ></textarea>
                            )}
                        />
                    </FormGroup>

                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default AddBootcampComponent;
