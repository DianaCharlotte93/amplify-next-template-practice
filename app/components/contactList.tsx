'use client'

import { useEffect, useState } from "react";
import { generateClient } from 'aws-amplify/api';
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>();

const ContactList = () => {
    const [contacts, setContacts] = useState<Schema['Contacts']['type'][]>([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const {data} = await client.models.Contacts.list();
                setContacts(data);
            } catch (err) {
                console.error('error fetching contacts:', err);
            }
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} - {contact.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList