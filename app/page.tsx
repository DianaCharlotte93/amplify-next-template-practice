"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Dialer from "./components/dialer";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const {user, signOut} = useAuthenticator();

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s phone</h1>
      <h1>My Phone</h1>
      <div>
        <Dialer />
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
