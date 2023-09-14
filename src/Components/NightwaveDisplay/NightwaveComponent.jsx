import React from "react";
import { convertToDuration, getTimeRemaining } from "./../utils.js";

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
        <div key={challenge.id}>
            <h4>{challenge.title}</h4>
            <p>{challenge.desc}</p>
            <p>Réputation: {challenge.reputation}</p>
            {startedString && <p>{startedString}</p>}
            {expiresString && <p>{expiresString}</p>}
            <hr />
        </div>
    );
};

export const ChallengeList = ({ challenges, title }) => (
    <div>
        <h3>{title}</h3>
        {challenges.map(challenge => <ChallengeItem key={challenge.id} challenge={challenge} />)}
    </div>
);

