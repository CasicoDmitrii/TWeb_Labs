import InheritageFile from "./inheritageFile";
import React, { useState } from 'react';
import { Table, Radio, Divider } from 'antd';

const columns = [
    {
        title: 'First name',
        dataIndex: 'firstname',
    },
    {
        title: 'Second name',
        dataIndex: 'secondname',
    },
    {
        title: 'Info',
        dataIndex: 'info',
    },
];


const data: InheritageFile[] =[
    {
        id: '1',
        firstname: 'A',
        secondname: 'B',
        info: 'Hello',
        username: 'Bob',
    },
    {
        id: '2',
        firstname: 'C',
        secondname: 'D',
        info: 'Bye',
        username: 'NotBob',
    },
]

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: InheritageFile[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: InheritageFile) => ({
        disabled: record.firstname === 'Disabled User', // Column configuration not to be checked
        name: record.firstname,
    }),
};

export const Inher = () => {

    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    return(
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default Inher;