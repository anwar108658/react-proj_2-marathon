
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

const RTE = ({name,control,label,defaultVal=""}:any) => {
  return (
    <div className='w-full'>
        {label && <label className='text-sm font-medium text-gray-700'>{label}</label>}
        <Controller
            name={name || "content"}
            control={control}
            defaultValue={defaultVal}
            render={({field: {onChange}}) => (
                <Editor
                initialValue={defaultVal}
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={(content) => onChange(content)}
                />
            )}
        />
    </div>
  )
}

export default RTE