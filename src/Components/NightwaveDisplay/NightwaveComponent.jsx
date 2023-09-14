import React from "react";
import { convertToDuration, getTimeRemaining } from "./../utils.js";
import Accordion from "../Accordion/Accordion";

export const ChallengeItem = ({ challenge }) => {
    let startedString = '';
    let expiresString = '';

    if (challenge.startString) {
        const duration = convertToDuration(challenge.startString);
        if (duration) {
            startedString = `À démarré il y a: ${Math.abs(duration.days())} jours ${Math.abs(duration.hours())} heures ${Math.abs(duration.minutes())} minutes`;
        }
    }

    if (challenge.expiry) {
        const remainingTime = getTimeRemaining(challenge.expiry);
        if (remainingTime) {
            expiresString = `Reste: ${remainingTime.days} jours ${remainingTime.hours} heures ${remainingTime.minutes} minutes`;
        }
    }

    return (
        <Accordion key={challenge.id} title={challenge.title}>
            <p>{challenge.desc}</p>
            <p>Réputation: {challenge.reputation}</p>
            {startedString && <p>{startedString}</p>}
            {expiresString && <p>{expiresString}</p>}
        </Accordion>
    );
};

export const ChallengeList = ({ challenges, title }) => (
    <div >
        <h2>{title}</h2>
        {challenges.map(challenge => <ChallengeItem key={challenge.id} challenge={challenge} />)}
    </div>
);

