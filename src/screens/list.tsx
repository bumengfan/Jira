import React from "react"
import { User } from "./search-panel"

interface Project{
    id: string;
    name: string;
    personId: string;
    pin: string;
    organization: string
}


interface ListProps{
    users: User[],
    list: Project[]
}


export const List = ({users, list }: ListProps) => {



    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(item => <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{users.find(user => user.id===item.personId)?.name || 'unkown'}</td>
                </tr>)
            }
        </tbody>
    </table>
}