/// <reference path="./global.d.ts" />
// @ts-check
export const gtcVersion = visitor => visitor?.gtc?.version;
export const createVisitor = (name, age, ticketId) => ({ name, age, ticketId})
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
export function ticketStatus(tickets, ticketId) {
  switch (tickets[ticketId]) {
    case undefined:
      return 'unknown ticket id';
  
    case null:
      return 'not sold';
    default:
      return `sold to ${tickets[ticketId]}`;
  }
}
export function simpleTicketStatus(tickets, ticketId) {
  switch (tickets[ticketId]) {
    case undefined:
    case null:
      return 'invalid ticket !!!';
    default:
      return `${tickets[ticketId]}`;
  }
}