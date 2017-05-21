/**
 * ParrotController
 *
 * @description :: Server-side logic for managing parrots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 function getParrotName(req, res) {
   return res.json({ name: 'Tarzan and Jane' })
 }

 module.exports = {
   getParrotName,
 };
