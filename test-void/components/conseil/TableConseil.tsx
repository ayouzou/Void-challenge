import React from 'react'
import Separator from '../main/Separator';
const boardMembers = [
    {
        id: 1,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    },
    {
        id: 2,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    }, {
        id: 3,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    }, {
        id: 4,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    },
    {
        id: 5,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    },
    {
        id: 6,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    },
    {
        id: 7,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    },
    {
        id: 8,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    },
    {
        id: 9,
        name: 'Frédéric Oudéa',
        age: 60,
        content: 'Président du Conseil d’Administration',
        nationality: 'française',
        nominationDate: 'Mai 2023',
        mandat: 'Assemblée Générale 2027',
        Ancienneté: '<1',
        CA: '',
        CNG: 'X',
        CR: '',
        CS: 'P',
        CSci: 'X',
        CEx: ''
    },
];
const TableConseil = () => {
    return (
        <div className="bg-white  rounded overflow-hidden ">
            <table className="w-full h-[100px] ">
                <thead className='h-[100px] border-b-2 border-black'>
                    <tr className=' font-bold md:text-[15px] text-[10px] text-[#0D0D0D]'>
                        <th className="md:text-left md:pl-3 ">Administrateur</th>
                        <th className="md:text-left">Age</th>
                        <th className="md:text-left">Nationalité</th>
                        <th className="md:text-left">1ère Nomination</th>
                        <th className="md:text-left">Echéance du mandat</th>
                        <th className="md:text-left">Ancienneté</th>
                        <th className="md:text-left">CA</th>
                        <th className="md:text-left">CNG</th>
                        <th className="md:text-left">CR</th>
                        <th className="md:text-left">CS</th>
                        <th className="md:text-left">CSci</th>
                        <th className="md:text-left">CEx</th>
                    </tr>
                </thead>
                <tbody className='h-[100px] border-b-2'>
                    {boardMembers.map((member, index) => (
                        <tr key={index} className='text-[14.88px] h-[104px] border'>
                            <td className='md:pl-3'>
                                {member.name} <br />
                                <span className='text-[12.91px]'>
                                    {member.content}
                                </span>
                            </td>
                            <td>{member.age}</td>
                            <td>{member.nationality}</td>
                            <td>{member.nominationDate}</td>
                            <td>{member.mandat}</td>
                            <td className=' border-[1px] text-center'>{member.Ancienneté}</td>
                            <td className=' border-[1px] text-center'>{member.CA}</td>
                            <td className=' border-[1px] text-center'>{member.CNG}</td>
                            <td className=' border-[1px] text-center'>{member.CR}</td>
                            <td className=' border-[1px] text-center'>{member.CS}</td>
                            <td className=' border-[1px] text-center'>{member.CSci}</td>
                            <td className=' border-[1px] text-center'>{member.CEx}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableConseil